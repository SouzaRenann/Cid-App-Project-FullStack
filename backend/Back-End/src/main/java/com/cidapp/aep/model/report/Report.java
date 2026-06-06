package com.cidapp.aep.model.report;

import com.cidapp.aep.model.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tb_report")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private ReportStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String protocol;

    @Enumerated(EnumType.STRING)
    private ReportType type;

    private String location;

    private boolean anonymous;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "authority_id")
    private Authority authority;

    @OneToMany
    private List<ReportAttachment> reportAttachments;

    @OneToMany
    private List<ReportMovement> reportMovements;
}